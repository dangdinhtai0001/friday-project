import kyInstance from '@/plugins/ky.plugin'

export const getUsers = async () => {
  try {
    const response = await kyInstance.get('users').json()

    return response
  } catch (error) {
    console.error('Error fetching users with GET:', error)
    throw new Error('Cannot fetch users. Please try again later.')
  }
}

export const headUsers = async () => {
  try {
    // Gửi yêu cầu HEAD để lấy thông tin tiêu đề
    const response = await kyInstance.head('users', {})
    const totalRecords = response.headers.get('X-Total-Count')

    return totalRecords
  } catch (error) {
    console.error('Error fetching user count with HEAD:', error)
    throw new Error('Cannot get user count. Please try again later.')
  }
}
