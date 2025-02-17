const checkRequireBodrArgumrnts = (args) => {
    return (req, res, next) => {
        if (args) {
            if (req.body === undefined) {
                res.locals['response'] == 422
                res.status(422).send('req.body is undefined')
            }
            else {
                const missingArgs = args.filter(item => req.body[item] === undefined)
                if (missingArgs.length > 0) {
                    res.locals.response = 422
                    res.status(422).send(`the missing arguments are:${missingArgs.join(', ')}`)
                }
            }
        }
        next()
    }
}

module.exports = { checkRequireBodrArgumrnts }