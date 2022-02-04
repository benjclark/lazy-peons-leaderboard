# Spood run Database structure

# player

- id: int2
- name: varchar (Jon, Ben, Rich)
- youtube_channel_url: varchar

# player_class

- id: int2
- name: varchar
- short_name: varchar
- icon_url: varchar

# sex

- id: int2
- sex: varchar

# race

- id: int2
- name: varchar
- male_icon_url: varchar
- female_icon_url: varchar

# zone

- id: int2
- name: varchar

# speed_run_entry

- id: int2
- player: player_id
- player_class: player_class_id
- sex: sex_id
- race: race_id
- date: date
- split_times: array_of(int2)
- youtube_link: varchar
