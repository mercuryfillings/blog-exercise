# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) SOFTWARE ENGINEERING IMMERSIVE

# Blog App

Your task is to build a blog using MongoDB, Mongoose, Express, and React

Your app should include the following:

- CRUD on the backend (an api where you can create, read, update, and delete blog posts)
- CRUD on the frontend (a react frontend that has axios calls that can create, read, update, and delete blog posts)

**Tip**

- Keep your react app simple (as close to the products app as possible)
- You can always add features later! Get it to work first.

**Deploy**
> include your deployment url in the pull request description

### Advanced Bonus: 

Include the concept of a user:
- A post belongs to a user
- A user can have many posts

Sketch the React app first
- Build low-fi screens for how you plan to build this Blog App with the concept of users.

<details><summary>Here is an example schema.</summary>
<p>

```js
const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    posts: [{ type: Schema.Types.ObjectId, ref: 'posts' }]
  },
  { timestamps: true }
)
```

```js
const Post = new Schema(
  {
    title: { type: String, required: true },
    imgURL: { type: String, required: true },
    content: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'users' }
  },
  { timestamps: true }
)
```

</p>
</details>

> Make sure to accomodate this schema in the express routes, controllers, and in your react app as well

In your seed file you will have to:
1. Create users
2. Create posts and associate them with users
3. Create the association between users and posts

How would your express controllers look like?
- Hint: it depends on what data your react component needs

**Tips**
- https://mongoosejs.com/docs/queries.html
- https://mongoosejs.com/docs/populate.html
