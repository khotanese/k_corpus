import csv

class file_operations:
    def read_data(self, input_file_name):
        def read_data_line(line_number):
            nonlocal input_file_name
            output = []
            with open(input_file_name, "r", encoding="utf-8") as f_reader:
                csv_reader = csv.reader(f_reader)
                for row in csv_reader:
                    output.append(row[line_number])
            return output
        return read_data_line

    def write_data(self, file_path, data_list):
        with open(file_path, "w", encoding="utf-8", newline="") as f_writer:
            csv_writer = csv.writer(f_writer)
            csv_writer.writerows(data_list)

def create_data(id_list, config_list, text_reader):
    output = {}
    for row in config_list:
        current_table = []
        table_name, line_number = row
        data_list = text_reader(line_number)[1:]
        for i in range(len(id_list)):
            current_id = id_list[i]
            current_data_record = data_list[i]
            if current_data_record != "":
                if ";" in current_data_record:
                    for item_seperated_by_semicolumn in current_data_record.split(";"):
                        current_table.append([current_id, item_seperated_by_semicolumn])
                else:
                    current_table.append([current_id, current_data_record])
        output[table_name] = current_table
    return output

def write_data_to_file(data, output_path):
    f_io = file_operations()
    for table_name, data in data.items():
        file_path = f"{output_path}\\{table_name}.csv"
        f_io.write_data(file_path, data)


f_io = file_operations()
data = {}
config_list = [["language_data", 7], ["script_data", 9], ["alltext_data", 24]]
text_reader = f_io.read_data("input.csv")
id_list = text_reader(0)[1:]
data = create_data(id_list, config_list, text_reader)
# print(data)
write_data_to_file(data, "output")
print("Done!")