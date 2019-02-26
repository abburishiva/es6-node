import express from 'express';

const middlewareAuth = (req, res, next) => {
    next();
}



export default middlewareAuth;