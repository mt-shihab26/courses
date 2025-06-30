const err404 = (req, res) => {
    return res.status(404).json({
        error: "resource not found"
    })
}

export { err404 };