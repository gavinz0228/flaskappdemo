from file_parsers.file_parser_factory import FileParserFactory
class DataProcessor:
    def __init__(self):
        pass
    def get_target_table_name_by_data_type(self, data_type):
        table_name = None #from config
        return table_name

    def process_file(self, file_info):
        success = True
        error = None
        parsed_data = self.parse_data(file_info["format"], file_info["file_archive_path"])
        target_table_name = self.get_target_table_name_by_data_type(file_info["data_tyep"])
        self.write_data_to_table(parsed_data, target_table_name)
        return success, error

    def parse_data(self, format, file_location):
        parser = FileParserFactory.get_file_parser_by_name(format)
        parsed_data, error = parser.parser_file(file_location)
        return parsed_data, error

    def write_data_to_table(self, data, table):
        pass