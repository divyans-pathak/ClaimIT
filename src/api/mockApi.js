// Simple mock API using localStorage
const KEY = 'claimit_claims_v1'

function read(){
  try{
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : []
  }catch(e){
    return []
  }
}

function write(data){
  localStorage.setItem(KEY, JSON.stringify(data))
}

function generateId(){
  return Date.now().toString(36) + Math.random().toString(36).slice(2,6)
}

export default {
  getAll(){
    return read()
  },
  get(id){
    return read().find(c=>c.id===id)
  },
  create({ title, amount, description }){
    const claims = read()
    const claim = {
      id: generateId(),
      title,
      amount: Number(amount),
      description: description || '',
      status: 'pending',
      createdAt: new Date().toISOString()
    }
    claims.unshift(claim)
    write(claims)
    return claim
  },
  update(id, patch){
    const claims = read()
    const idx = claims.findIndex(c=>c.id===id)
    if(idx === -1) return null
    claims[idx] = { ...claims[idx], ...patch }
    write(claims)
    return claims[idx]
  },
  remove(id){
    const claims = read().filter(c=>c.id!==id)
    write(claims)
  },
  clear(){
    write([])
  }
}
