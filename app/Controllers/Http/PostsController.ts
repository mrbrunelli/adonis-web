import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {
  public async index({ view }: HttpContextContract) {
    const posts = await Post.all()
    return view.render('post', { posts })
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['title', 'description'])
    const post = Post.create(data)
    return post
  }

  public async destroy({ params }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    await post.delete()
  }
}
