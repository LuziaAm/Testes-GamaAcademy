const Cliente = require('../../models/Cliente')

describe('Clientes', () => {
  beforeEach(() => {})

  it('Retornar Id', () => {
    let cliente = Cliente.primeiro()
    expect(cliente.id).not.toBeUndefined()
    expect(cliente.nome).not.toBeUndefined()
    expect(cliente.telefone).not.toBeUndefined()
  })

  it('Retornar todos', () => {
    let clientes = Cliente.todos()
    expect(clientes.length).toEqual(10)
  })

  it('Nome do cliente Upercase', () => {
    let cliente = Cliente.primeiro()
    cliente.nome = 'luzia'
    expect(cliente.nomeUpercase()).toEqual('LUZIA')
  })
})
