const { supabase } = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');


exports.Regis = async (req,res) =>{
    try{
        const {Fname,Lname,contact,password} = req.body
        if(!Fname || !Lname || !contact || !password){
                return res.status(400).json({ error: "Please enter all information" });
        }

        const { data: haveUser, error: findError } = await supabase
            .from("customer")
            .select("cus_id")
            .eq("contact", contact)
            .maybeSingle();
 
        if (findError) {
            console.log(findError);
            return res.status(500).json({ error: "Server Error" });
        }
 
        if (haveUser) {
            return res.status(400).json({ message: "Account already exists. Please log in" });
        }

        const Passwd = await bcrypt.hash(password, 10);

        const { data: newCustomer , error: insertError } = await supabase
            .from("customer")
            .insert([
                {
                    cus_id : uuidv4(),
                    frist_name: Fname,
                    last_name :Lname,
                    contact: contact,
                    password: hashedPassword,
                },
            ])
            .select()
            .single();
        
        if (insertError) {
            console.log(insertError);
            return res.status(500).json({ error: "Server Error" });
        }

       return res.status(201).json({ message: "Registered successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Server Error" });
    }
}


exports.Login = async (req, res) => {
    try {
        const { contact , password } = req.body;
 
        if (!contact || !password) {
            return res.status(400).json({ error: "Please enter name and password" });
        }
 
        const { data: user, error: findError } = await supabase
            .from("customer")
            .select("*")
            .eq("contact", contact)
            .maybeSingle();
 
        if (findError) {
            console.log(findError);
            return res.status(500).json({ error: "Server Error" });
        }
 
        if (!user) {
            return res.status(400).json({ error: "User not already registed" });
        }
 
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            console.log("wrong password");
            return res.status(400).json({ error: "Wrong password" });
        }
 
        const payload = { id: user.id, name: user.name };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "24h" });
 
        return res.status(200).json({
            message: "Login successful",
            token: token,
            id: user.id,
            name: user.frist_name
        });
 
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Server Error" });
    }
};
