import csv
import re

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

    def write_one_to_many_data(self, file_path, data_list):
        with open(file_path, "w", encoding="utf-8", newline="") as f_writer:
            csv_writer = csv.writer(f_writer)
            csv_writer.writerows(data_list)

    def read_whole_input(self, input_file_name):
        output = []
        with open(input_file_name, "r", encoding="utf-8") as f_reader:
            csv_reader = csv.reader(f_reader)
            for row in csv_reader:
                output.append(row)
        # skip the headline
        output = output[1:]
        return output

    def write_one_to_many_data_to_file(self, data, output_path):
        f_io = file_operations()
        for table_name, data in data.items():
            file_path = f"{output_path}\\{table_name}.csv"
            f_io.write_one_to_many_data(file_path, data)

    def write_main(self, data, output_path, output_filename):
        with open(f"{output_path}\{output_filename}", "w", newline = "", encoding="utf-8") as f_handle:
            writer = csv.writer(f_handle)
            writer.writerows(data)

def create_one_to_many_data(id_list, one_to_many_list, text_reader):
    output = {}
    for row in one_to_many_list:
        current_table = []
        table_name, line_number = row
        data_list = text_reader(line_number)[1:]
        for i in range(len(id_list)):
            current_id = id_list[i]
            current_data_record = data_list[i]
            if current_data_record != "":
                if "【" in current_data_record:
                    combined_id = current_data_record.split(" 【")[0]
                    current_table.append([current_id, combined_id])
                    combined_singles = current_data_record.split(" 【")[1].replace("】", "")
                    for item_seperated_by_semicolumn in combined_singles.split("; "):
                        current_table.append([current_id, item_seperated_by_semicolumn.split(" ")[0]])
                else:
                    current_table.append([current_id, current_data_record.split(" ")[0]])
        output[table_name] = current_table
    return output



def create_main_one_to_one_data(id_list, one_to_one_list_code_only, line_break_list, input_all):
    output = []
    one_to_one_list_id_only = [i[1] for i in one_to_one_list_code_only]
    line_break_list_id_only = [i[1] for i in line_break_list]
    # fill_by_empty_not_zero_list_id_only = [i[1] for i in fill_by_empty_not_zero_list]
    for row in input_all:
        for column_to_remove_description in one_to_one_list_id_only:
            row[column_to_remove_description] = row [column_to_remove_description].split(" ")[0]
        for create_line_break in line_break_list_id_only:
            row[create_line_break] = row[create_line_break].replace("%", "<br /><br />")
        for count_column in range(len(row)):
            # remove commas to prevent csv problems
            row[count_column] = row[count_column].replace(",", " ")
            row[count_column] = row[count_column].replace("  ", " ")
            if row[count_column] == "":
                row[count_column] = "No data"
            # if row[count_column] == "" and count_column not in fill_by_empty_not_zero_list_id_only:
            #     row[count_column] = "0"
            # elif row[count_column] == "" and count_column in fill_by_empty_not_zero_list_id_only:
            #     row[count_column] = "Empty"
        output.append(row)
    return output

f_io = file_operations()
input_file = "input.csv"
data = {}
one_to_one_list_code_only = [["current_location",1], ["main_find_spot",2], ["specific_find_spot", 3], ["expedition_or_collection", 5], ["genre", 9], ["subgenre", 10], ["title", 12], ["writing_surface", 19]]
one_to_many_list = [["language_data", 7], ["script_data", 8], ["alltext_data", 22]]
line_break_list = [["translation", 23], ["commentary", 24]]
# fill_by_empty_not_zero_list = [["title", 12], ["content_summary", 13]]
text_reader = f_io.read_data(input_file)
id_list = text_reader(0)[1:]
data = create_one_to_many_data(id_list, one_to_many_list, text_reader)
# print(data)
f_io.write_one_to_many_data_to_file(data, "output")
input_all = f_io.read_whole_input("input.csv")
data = create_main_one_to_one_data(id_list, one_to_one_list_code_only, line_break_list, input_all)
f_io.write_main(data, "output", "meta_data.csv")
print("Done!")