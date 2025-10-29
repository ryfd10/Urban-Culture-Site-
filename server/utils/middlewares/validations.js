const checkRequireBodrArgumrnts = (args=[]) => {
    if(args instanceof Array===false){
        throw TypeError(`args mast be type of array received ${typeof args}`)
    }
    if(args.some(item=>typeof item !=='string')){
        throw TypeError('all items in the arg array mast be of type string')
    }
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