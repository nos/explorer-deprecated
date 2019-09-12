import ApiService from '@/services/api'

class BlockchainService {
  async height () {
    const response = await ApiService.get('blockchain')
    return response.data.block.height
  }

  async supply () {
    const response = await ApiService.get('blockchain')
    return response.data.supply
  }

  async staked () {
    const response = await ApiService.get('blockchain')
    return response.data.staked
  }
}

export default new BlockchainService()
