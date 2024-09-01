create table serviceseller (
    id int unsigned primary key auto_increment not null,
    name VARCHAR(155) NOT NULL,
    password VARCHAR(55) NOT NULL,
    mail VARCHAR(155) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    validate BOOLEAN NOT NULL
);

create table land (
    id int unsigned primary key auto_increment not null,
    price DECIMAL(4.2) NOT NULL,
    spot_number INT NOT NULL,
    benefits TEXT NOT NULL,
    land_confirmation BOOLEAN NOT NULL
);

INSERT INTO
    serviceseller (
        name,
        password,
        mail,
        phone,
        validate
    )
VALUES (
        "jean michel gelormini",
        "liberta",
        "glock@gmail.com",
        "0938726384",
        1
    ),
    (
        "alphonso ringuet",
        "nissangtr",
        "cr7@live.fr",
        "0675454323",
        1
    );

INSERT INTO
    land (
        price,
        spot_number,
        benefits,
        land_confirmation
    )
VALUES (18, 1, "eau gratos", 1),
    (15, 3, "velo a dispo", 1);