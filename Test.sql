CREATE TABLE UE
(
	id_ue SERIAL PRIMARY KEY,
	classe VARCHAR,
	type VARCHAR,
	designation VARCHAR,
	description VARCHAR,
	interpretation VARCHAR,
	secteur VARCHAR,
);

INSERT INTO "ue" ("id_ue","classe", "type", "designation", "description", "interpretation", "secteur")
VALUES (22,'US', 'Creusement','Construction','passe a travers le niveau de sol', 'blabla','1'),
       (23, 'US', 'Comblement', 'Dépôt', 'contient céramique gallo-romaine', 'bloblo','2A');
