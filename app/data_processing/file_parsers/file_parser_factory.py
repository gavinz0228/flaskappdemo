class FileParserFactory:
    file_parser_cache = {} 

    @staticmethod
    def get_file_parser_by_name(name):
        return None