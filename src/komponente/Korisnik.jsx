import React from "react";
import PropTypes from "prop-types";

function Korisnik({ avatar_url, name, location, bio }) {
  return (
    <div>
      <img src={avatar_url} alt="Avatar" />
      <h2>{name || 'Nema imena'}</h2>
      <p>{location || 'Nema lokacije'}</p>
      <p>{bio || 'Nema bio'}</p>
    </div>
  );
};


Korisnik.propTypes = {
  avatar_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default Korisnik;