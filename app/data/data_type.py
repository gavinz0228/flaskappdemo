class DataType:
    @staticmethod
    def get_all_data_types():
        return all_data_types
    
    @staticmethod
    def search_data_types(search_text):
        search_text = search_text.lower()
        def search(data_type):
            if search_text in data_type["dataTypeName"].lower() or search_text in data_type["deviceBrand"].lower() or search_text in data_type["deviceType"].lower()  or search_text in data_type["dataType"].lower():
                return True
            return False
        if search_text:
            result = list(filter(search, all_data_types))
        else:
            result = all_data_types
        return result

all_data_types = [
    {
        "dataTypeId": 1,
        "dataTypeName": "Fitbit Watch Sleep Data",
        "deviceBrand": "Fitbit",
        "deviceType": "Smart Watch",
        "dataType": "Sleep Data"
    },
    {
        "dataTypeId": 2,
        "dataTypeName": "Fitbit Watch Sleep Hear Rate Data",
        "deviceBrand": "fitbit",
        "deviceType": "Smart Watch",
        "dataType": "Heart Rate Data"
    },
    {
        "dataTypeId": 3,
        "dataTypeName": "Awesome Sleep Monitor",
        "deviceBrand": "Awesome Company",
        "deviceType": "Sleep Monitor",
        "dataType": "Sleep Data"
    },
    {
        "dataTypeId": 4,
        "dataTypeName": "Iphone Sleep Data",
        "deviceBrand": "Apple",
        "deviceType": "Mobile Phone",
        "dataType": "Sleep Data"
    },
    {
        "dataTypeId": 5,
        "dataTypeName": "Android Sleep Data",
        "deviceBrand": "Google",
        "deviceType": "Mobile Phone",
        "dataType": "Sleep Data"
    }
]