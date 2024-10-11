import React from 'react';
import PropTypes from 'prop-types';

function ListaRepozitorija({ repositoryList }) {
  return (
    <div>
      <h2>Lista Github Repozitorija</h2>
      <ul>
        {repositoryList && repositoryList.length > 0 ? (
          repositoryList.map((repository, index) => (
            <li key={index}>{repository}</li>
          ))
        ) : (
          <li>Nema repozitorija za prikaz</li>
        )}
      </ul>
    </div>
  );
}

ListaRepozitorija.propTypes = {
  repositoryList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListaRepozitorija;