import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import RecipeApi from "../api/recipeApi";

const DetailRecipe = () => {
  const { id } = useParams();
  const [ricetta, setRicetta]: any = useState();
  const [loading, setLoading] = useState(false);

  async function onGetRecipe() {
    try {
      setLoading(true);
      const idNumber = Number(id);
      const recipe = await RecipeApi.getRecipe(idNumber);
      if (recipe) {
        setRicetta(recipe);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    onGetRecipe();
  }, []);

  return (
    <Contenitore>
      {ricetta && (
      <>
        <div
          className="fotoAnime"
          style={{ backgroundImage: `url(${ricetta?.image})` }}></div>

        <p className="titoloAnime">
          <h2>{ricetta?.title}</h2>
        </p>

        <p className="Descrizione"> {ricetta?.description} </p>

        <div className="container">
          <div className="row">
            <div className="col-sm">Voto: {ricetta?.difficulty} </div>
            <div className="col-sm-2"> {ricetta?.date} </div>
          </div>
        </div>
      </>
      )}
      {!ricetta && (
        <div>Spiacenti l'Anime cercato non è piu disponibile</div>
      )}
      {loading && (
        <div className="container-spinner">
          <div className="spinner-border text-danger" role="status"></div>
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </Contenitore>
  );
};

const Contenitore = styled.div`
  background-color: white;

  .fotoAnime {
    height: 450px;
    margin-top: -19px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

  }

  .titoloAnime {
    margin-left: 20px;
    margin-top: 20px;
  }

  .Descrizione {
    text-align: justify;
    margin-left: 20px;
    margin-right: 20px;
  }

  .col-sm {
    margin-left: -70px;
  }

  .col-sm-2 {
    padding-left: 135px;
  }
  .container-spinner {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default DetailRecipe;

