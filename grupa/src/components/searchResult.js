import React from "react";
import "./InfoBox.css";
function SearchResults({ results }) {
    if (!results) {
        return null;
    }

    return (
        <>
            {results.map(result => (
                <div className="main">
                <div className="inBox" >
                    <div className="infoBoxHeader">
                        <div className="headerLine"></div>
                    </div>
                    <div className="infoRow">
                        <div className="infoColumnBox">
                            <img className="InfoImageBox" src={result.img} alt={result.name}/>
                            <div className="infoRow">
                                <div className="smallBoxCenter">
                                    <h1 className="name">{result.name}</h1>
                                    <h1 className="grey">Game</h1>
                                </div>
                                <div className="verticalLine"></div>
                                <div className="smallBoxEnd">
                                    <h1 className="age">{result.age}+</h1>
                                    <h1 className="grey">Age rating</h1>
                                </div>
                            </div>
                            <div className="mobileHorizontalLine"></div>
                        </div>
                        <div className="mobileRow">
                            <div className="smallBoxCenter">
                                <h1 className="price">{result.price}</h1>
                                <h1 className="grey">Price</h1>
                            </div>
                            <div className="verticalLine"></div>
                            <div className="smallBoxCenter">
                                <h1 className="release">{result.releaseDate}</h1>
                                <h1 className="grey">Release Date</h1>
                            </div>
                        </div>
                        <div className="longVerticalLine"></div>
                        <div className="mobileHorizontalLine"></div>
                        <div className="infoColumnBox">
                            <div className="titleBox">
                                <h1>Description</h1>
                                <div className="longHorizontalLine"></div>
                            </div>
                            <div className="descriptionBoxInfo">
                                <h3>{result.description}</h3>
                            </div>
                            <div className="infoRowHide">
                                <div className="smallBoxCenter">
                                    <h1 className="price">{result.price}</h1>
                                    <h1 className="grey">Price</h1>
                                </div>
                                <div className="verticalLine"></div>
                                <div className="smallBoxCenter">
                                    <h1 className="release">{result.releaseDate}</h1>
                                    <h1 className="grey">Release Date</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            ))}
        </>
    );
}

export default SearchResults;
