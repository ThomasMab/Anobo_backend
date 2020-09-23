
CREATE TABLE "ue" (
	id SERIAL PRIMARY KEY,
	classe VARCHAR NOT NULL,
	type VARCHAR NOT NULL,
	zone VARCHAR,
	secteur VARCHAR,
	description VARCHAR,
	interpretation VARCHAR,
	designation VARCHAR,
	auteur VARCHAR,
	created_at DATE NOT NULL DEFAULT NOW(),
  	updated_at DATE
);


CREATE TABLE "relation" (
	id SERIAL PRIMARY KEY,
	ue_origine VARCHAR NOT NULL,
	nature VARCHAR NOT NULL,
	ue_cible VARCHAR NOT NULL,
	created_at DATE NOT NULL DEFAULT NOW(),
	updated_at DATE
);


CREATE TABLE "ue_relation" (
	id_ue INTEGER NOT NULL REFERENCES ue("id") ON DELETE CASCADE,
	id_relation INTEGER NOT NULL REFERENCES relation("id") ON DELETE CASCADE,
	created_at DATE NOT NULL DEFAULT NOW()
);



INSERT INTO "ue" ("id","classe", "type", "zone", "secteur", "description", "designation")
VALUES (1, 'Groupe', 'fait','sud','2B', 'Fut-ce en mille éclats Elle est toujours la - La lune dans l eau', 'Fosse'),
       (2,'Groupe', 'structure', 'sud','2B', 'database permet de stocker et de retrouver des données brutes ou de l,information, souvent en rapport avec un theme ou une activite ; celles-ci peuvent être de natures différentes et plus ou moins reliées entre elles', 'Fosse'),
       (3, 'Methodo', 'truc','','','','');

INSERT INTO "relation" ("id","ue_origine", "nature", "ue_cible")
VALUES (1000, 1, 'sous', 3),
		(1001, 2,'composé_de', 3);

INSERT INTO "ue_relation" ("id_ue", "id_relation")
VALUES (1,1000),
		(2,1001);