import User from "../models/UserModel.js"
import {StatusCodes} from "http-status-codes";
import UnAuthenticatedError from "../errors/unauthenticatederror.js"
import BadRequestError from "../errors/bad-requesterror.js"

const register = async (req,res)=>{
   const {name,email,password} = req.body;

   const user = User.create({name,email,password});

   res.status(StatusCodes.CREATED).json({
    user:{
        email:user.email,
        name:user.name
    }
   })

}

const login = async (req,res)=>{
    const { email, password } = req.body;
    console.log(email)
  if (!email || !password) {
    throw new BadRequestError("please Provide all Values");
  }
  const user = await User.findOne({ email: email }).select("+password");
  if (!user) {
    throw new UnAuthenticatedError("You are not Admin");
    // res.status(500).json({msg:"there was no user."})
  }
  // here we get error for sure even though the user exist. reason is we kept select false in user model of password.
  //due to that setting password will not get returned from the user object and bcrypt will return false and output would come as invalid response.
  // this error would come due to fact that we are using findone and it should not be used when we had select is false in model.
  //for that reason we should override the password with object.select('+password')
  const isPasswordCorrect = await user.comparePasswords(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }
  const token = user.createJWT();
  // the user contains password it should not be exposed to outer world so we keep that password as undefined
  user.password = undefined;
  // console.log(user);
  res
    .status(StatusCodes.OK)
    .json({ user: user, token: token, location: user.location });

}

export {login,register}