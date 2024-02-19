\echo 'Delete and recreate blackDiamond db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE blackDiamond;
CREATE DATABASE blackDiamond;
-- \connect blackDiamond1

-- DROP reservation;




\i /Users/jeffreyng/airbnb-black-diamond/backend/blackDiamond-schema.sql;