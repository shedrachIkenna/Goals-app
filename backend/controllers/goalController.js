const asyncHandler = require('express-async-handler')

//@description - Get goals
//@route -       GET /api/goals
//access =       Private
const getGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get goals' })
})

//@description - Set goal
//@route -       POST /api/goals
//access =       Private
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({ message: 'Set goal'})
})

//@description - Update goal
//@route -       PUT /api/goals/:id
//access =       Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}`})
})

//@description - Delete goal
//@route -       DELETE /api/goals/:id
//access =       Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Deleta goal ${req.params.id}`})
})


module.exports = {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal,
}