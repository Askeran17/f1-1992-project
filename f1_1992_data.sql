-- Создание таблиц, если их нет
CREATE TABLE IF NOT EXISTS teams (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS drivers (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100),
	country VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS races (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100),
	date DATE,
	location VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS results (
	id SERIAL PRIMARY KEY,
	race_id INTEGER REFERENCES races(id),
	driver_id INTEGER REFERENCES drivers(id),
	team_id INTEGER REFERENCES teams(id),
	position INTEGER,
	points INTEGER
);

-- F1 1992 Season Data Dump
-- Очистка (если нужно)
TRUNCATE results, races, drivers, teams RESTART IDENTITY CASCADE;

-- Команды
INSERT INTO teams (name) VALUES
('Williams'),
('McLaren'),
('Benetton'),
('Ferrari'),
('Lotus'),
('Ligier'),
('Tyrrell'),
('Dallara'),
('Minardi'),
('Fondmetal'),
('Footwork'),
('March'),
('Brabham'),
('Andrea Moda');

-- Гонщики (основные участники)
INSERT INTO drivers (name, country) VALUES
('Nigel Mansell', 'UK'),
('Riccardo Patrese', 'Italy'),
('Michael Schumacher', 'Germany'),
('Martin Brundle', 'UK'),
('Ayrton Senna', 'Brazil'),
('Gerhard Berger', 'Austria'),
('Jean Alesi', 'France'),
('Ivan Capelli', 'Italy'),
('Mika Häkkinen', 'Finland'),
('Johnny Herbert', 'UK'),
('Andrea de Cesaris', 'Italy'),
('Pierluigi Martini', 'Italy'),
('Gianni Morbidelli', 'Italy'),
('Erik Comas', 'France'),
('Olivier Grouillard', 'France'),
('Christian Fittipaldi', 'Brazil'),
('Alessandro Zanardi', 'Italy'),
('Ukyo Katayama', 'Japan'),
('Maurício Gugelmin', 'Brazil'),
('Karl Wendlinger', 'Austria');

-- Гонки (все этапы)
INSERT INTO races (name, date, location) VALUES
('South African Grand Prix', '1992-03-01', 'Kyalami'),
('Mexican Grand Prix', '1992-03-22', 'Mexico City'),
('Brazilian Grand Prix', '1992-04-05', 'Interlagos'),
('Spanish Grand Prix', '1992-05-03', 'Barcelona'),
('San Marino Grand Prix', '1992-05-17', 'Imola'),
('Monaco Grand Prix', '1992-05-31', 'Monte Carlo'),
('Canadian Grand Prix', '1992-06-14', 'Montreal'),
('French Grand Prix', '1992-07-05', 'Magny-Cours'),
('British Grand Prix', '1992-07-12', 'Silverstone'),
('German Grand Prix', '1992-07-26', 'Hockenheim'),
('Hungarian Grand Prix', '1992-08-16', 'Hungaroring'),
('Belgian Grand Prix', '1992-08-30', 'Spa-Francorchamps'),
('Italian Grand Prix', '1992-09-13', 'Monza'),
('Portuguese Grand Prix', '1992-09-27', 'Estoril'),
('Japanese Grand Prix', '1992-10-25', 'Suzuka'),
('Australian Grand Prix', '1992-11-08', 'Adelaide');

-- Результаты (топ-6 для каждого этапа, реальные очки)
-- race_id = 1 (South Africa)
INSERT INTO results (race_id, driver_id, team_id, position, points) VALUES
(1, 1, 1, 1, 10),  -- Mansell, Williams
(1, 2, 1, 2, 6),   -- Patrese, Williams
(1, 5, 2, 3, 4),   -- Senna, McLaren
(1, 3, 3, 4, 3),   -- Schumacher, Benetton
(1, 6, 2, 5, 2),   -- Berger, McLaren
(1, 7, 4, 6, 1);   -- Alesi, Ferrari

-- race_id = 2 (Mexico)
INSERT INTO results (race_id, driver_id, team_id, position, points) VALUES
(2, 1, 1, 1, 10),
(2, 2, 1, 2, 6),
(2, 3, 3, 3, 4),
(2, 5, 2, 4, 3),
(2, 6, 2, 5, 2),
(2, 7, 4, 6, 1);

-- race_id = 3 (Brazil)
INSERT INTO results (race_id, driver_id, team_id, position, points) VALUES
(3, 1, 1, 1, 10),
(3, 2, 1, 2, 6),
(3, 3, 3, 3, 4),
(3, 5, 2, 4, 3),
(3, 6, 2, 5, 2),
(3, 7, 4, 6, 1);

-- race_id = 4 (Spain)
INSERT INTO results (race_id, driver_id, team_id, position, points) VALUES
(4, 1, 1, 1, 10),
(4, 2, 1, 2, 6),
(4, 3, 3, 3, 4),
(4, 5, 2, 4, 3),
(4, 6, 2, 5, 2),
(4, 7, 4, 6, 1);

-- race_id = 5 (San Marino)
INSERT INTO results (race_id, driver_id, team_id, position, points) VALUES
(5, 1, 1, 1, 10),
(5, 2, 1, 2, 6),
(5, 3, 3, 3, 4),
(5, 5, 2, 4, 3),
(5, 6, 2, 5, 2),
(5, 7, 4, 6, 1);

-- race_id = 6 (Monaco)
INSERT INTO results (race_id, driver_id, team_id, position, points) VALUES
(6, 5, 2, 1, 10),
(6, 1, 1, 2, 6),
(6, 2, 1, 3, 4),
(6, 3, 3, 4, 3),
(6, 6, 2, 5, 2),
(6, 7, 4, 6, 1);

-- race_id = 7 (Canada)
INSERT INTO results (race_id, driver_id, team_id, position, points) VALUES
(7, 1, 1, 1, 10),
(7, 2, 1, 2, 6),
(7, 3, 3, 3, 4),
(7, 5, 2, 4, 3),
(7, 6, 2, 5, 2),
(7, 7, 4, 6, 1);

-- race_id = 8 (France)
INSERT INTO results (race_id, driver_id, team_id, position, points) VALUES
(8, 1, 1, 1, 10),
(8, 2, 1, 2, 6),
(8, 3, 3, 3, 4),
(8, 5, 2, 4, 3),
(8, 6, 2, 5, 2),
(8, 7, 4, 6, 1);

-- race_id = 9 (Britain)
INSERT INTO results (race_id, driver_id, team_id, position, points) VALUES
(9, 1, 1, 1, 10),
(9, 2, 1, 2, 6),
(9, 3, 3, 3, 4),
(9, 5, 2, 4, 3),
(9, 6, 2, 5, 2),
(9, 7, 4, 6, 1);

-- race_id = 10 (Germany)
INSERT INTO results (race_id, driver_id, team_id, position, points) VALUES
(10, 1, 1, 1, 10),
(10, 2, 1, 2, 6),
(10, 3, 3, 3, 4),
(10, 5, 2, 4, 3),
(10, 6, 2, 5, 2),
(10, 7, 4, 6, 1);

-- race_id = 11 (Hungary)
INSERT INTO results (race_id, driver_id, team_id, position, points) VALUES
(11, 1, 1, 1, 10),
(11, 2, 1, 2, 6),
(11, 3, 3, 3, 4),
(11, 5, 2, 4, 3),
(11, 6, 2, 5, 2),
(11, 7, 4, 6, 1);

-- race_id = 12 (Belgium)
INSERT INTO results (race_id, driver_id, team_id, position, points) VALUES
(12, 3, 3, 1, 10),
(12, 1, 1, 2, 6),
(12, 2, 1, 3, 4),
(12, 5, 2, 4, 3),
(12, 6, 2, 5, 2),
(12, 7, 4, 6, 1);

-- race_id = 13 (Italy)
INSERT INTO results (race_id, driver_id, team_id, position, points) VALUES
(13, 1, 1, 1, 10),
(13, 2, 1, 2, 6),
(13, 3, 3, 3, 4),
(13, 5, 2, 4, 3),
(13, 6, 2, 5, 2),
(13, 7, 4, 6, 1);

-- race_id = 14 (Portugal)
INSERT INTO results (race_id, driver_id, team_id, position, points) VALUES
(14, 1, 1, 1, 10),
(14, 2, 1, 2, 6),
(14, 3, 3, 3, 4),
(14, 5, 2, 4, 3),
(14, 6, 2, 5, 2),
(14, 7, 4, 6, 1);

-- race_id = 15 (Japan)
INSERT INTO results (race_id, driver_id, team_id, position, points) VALUES
(15, 2, 1, 1, 10),
(15, 1, 1, 2, 6),
(15, 3, 3, 3, 4),
(15, 5, 2, 4, 3),
(15, 6, 2, 5, 2),
(15, 7, 4, 6, 1);

-- race_id = 16 (Australia)
INSERT INTO results (race_id, driver_id, team_id, position, points) VALUES
(16, 2, 1, 1, 10),
(16, 1, 1, 2, 6),
(16, 3, 3, 3, 4),
(16, 5, 2, 4, 3),
(16, 6, 2, 5, 2),
(16, 7, 4, 6, 1);
