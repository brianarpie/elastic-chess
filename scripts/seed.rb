require 'elasticsearch'

client = Elasticsearch::Client.new url: "https://search-elastic-chess-axtz3y4vd24ibwop5o7t4eorc4.us-east-1.es.amazonaws.com"
INDEX_NAME = "production"

games = File.read(ENV['PGN_PATH']).split("\r\n\r\n\r\n")

puts "Total Games to Index: #{games.count}"

payloads = []

games.each_slice(10000) do |game_slice| 

  payload = []

  game_slice.each do |game|
    game_mapping = {}

    components = game.split(/\r\n/).reject(&:empty?)

    # special cases: result = last, moves = second to last.
    game_mapping['Result'] = components.pop
    game_mapping['Moves'] = components.pop

    # only metadata left...
    components.each do |metadata|
      # remove surrounding brackets.
      # split(delimiter, max number of elements in result array)
      key, value = metadata.gsub(/^\[|\]$/, '').split(" ", 2)
      game_mapping[key] = value.gsub(/"/, "").strip # remove quotations
    end

    # puts "Indexing Game: #{game_mapping['Date']} #{game_mapping['White']} vs #{game_mapping['Black']}"

    payload << {
      index: {
        _index: INDEX_NAME,
        _type: "ChessGame",
        _id: "#{game_mapping['Event']}_#{game_mapping['Site']}_#{game_mapping['Date']}_#{game_mapping['Round']}_#{game_mapping['White']}_#{game_mapping['Black']}"
      }
    }

    payload << game_mapping
  end

  payloads << payload
end

payloads.each do |payload|
  client.bulk body: payload
end

