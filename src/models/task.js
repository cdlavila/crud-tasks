class Task {
  constructor (db) {
    this.db = db
    this.ref = this.db.ref('/')
    this.collection = this.ref.child('tasks')
  }

  async create (payload) {
    const data = {
      title: payload?.title,
      description: payload?.description,
      completed: payload?.completed
    }

    const newTask = this.collection.push()
    await newTask.set(data)
    return {
      id: newTask.key,
      ...data
    }
  }

  async getAll () {
    const query = await this.collection.once('value')
    const data = query.val()
    if (!data) {
      return []
    }
    return Object.keys(data).map(key => ({
      id: key,
      ...data[key]
    }))
  }

  async getOne (id) {
    const query = await this.collection.child(id).once('value')
    const data = query.val()
    if (!data) {
      return null
    }
    return {
      id,
      ...data
    }
  }

  async update (id, payload) {
    const data = {
      title: payload?.title,
      description: payload?.description,
      completed: payload?.completed
    }

    await this.collection.child(id).update(data)
    return {
      id,
      ...data
    }
  }

  async delete (id) {
    const data = await this.getOne(id)
    await this.collection.child(id).remove()
    return {
      id,
      ...data
    }
  }
}

module.exports = Task