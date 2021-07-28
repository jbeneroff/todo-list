import { Router } from "express"
import { signUp } from "../controllers/users.js"

const router = Router()

// sign up : POST
router.post('/sign-up', signUp)
// sign in : POST
router.post('/sign-in', )
// verify: GET
router.get('/verify', )
// change password: POST
router.post('/change-password', )

export default router