CREATE TABLE reservation (
    id BIGSERIAL PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL CHECK (position('@' IN email) > 1)
    checkin DATE NOT NULL,
    checkout DATE NOT NULL
);