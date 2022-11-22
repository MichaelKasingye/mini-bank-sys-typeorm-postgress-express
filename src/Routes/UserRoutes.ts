import express from 'express';
import { User } from '../Entities/User';

const router = express.Router()

//get
router.get('/api/user', async(req, res) =>{
    await User.find().then((userData) =>{
        res.json(userData)
     }).catch(e => console.log(e)
     )
    // try{
    //      const findUsers = user.find();
    //     await res.status(200).json(findUsers)
    // }catch(e){
    //     await res.status(500).json({
    //         message:"some thing is wrong",
    //         error:e
    //     })
    //     console.log(e);
    // }
});


//post
router.post('/api/user', async (req, res)=>{
    try {
        console.log('/api/user');
        
           const{name,
               email,
               card_number,
               } = req.body;
               const user = User.create({
                   name,
                   email,
                   card_number
               })
              await user.save();
               res.status(200).json(user)
        
       } catch (error) {
        res.status(404).json({message:"sorry, Cannot find this", error:error})
       }
});

// Update
router.put("/api/user/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      const userItem = await User.findOneBy({ id: parseInt(userId, 10) });
    //   const userItem = await User.findOneBy({ id: userId });

      console.log(userItem);
      User.merge(userItem, req.body);
      if (!userItem) {
        res.status(404).json({ message: "userItem doesn't exist" });
      } else {
        const result = await userItem.save();
        res.status(200).json({
          message: "success",
          payload: result,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "fail",
        payload: error,
      });
    }
  });
  
  //delete
  router.delete("/api/user/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      const userItem = await User.delete(parseInt(userId));
    //   const userItem = await User.delete(userId);

      if (!userItem) res.status(404).json({ message: "userItem doesn't exist" });
        
      res.status(200).json({ message: "successfully deleted" });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });
  

export  {
    router as createUserRouter
}
