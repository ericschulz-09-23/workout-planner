import Meal from "../models/Meal";
import User from "../models/User";

export const createMeal = async (req, res, next) => {
    const newMeal = new Meal(req.body);
    try{
        const saveMeal = await newMeal.save();
        try {
            const user = await User.findById(savedMeal.author);
            user.meals.push(savedmeal._id);
            await user.save();
        } catch (err) {
            next(err);
        }
        res.status(200).json(savedMeal);
    } catch (err) {
        next(err);
    }
};

export const updateMeal = async (req, res, next) => {
    try {
        const meal = await Meal.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );
        res.status(200).json(meal);
    } catch (err) {
        next(err);
    }
};

export const deleteMeal = async (req, res, next) => {
    const userId = req.params.userId;
    try {
        const meals = await Meal.find({author: userId});
        ServiceWorker.status(200).json(meals);
    } catch (err) {
        next(err);
    }
};