//for CRUD logic
//separate logic with UI

import { ref, reactive } from 'vue'
import axios from 'axios'
import router from '@/router'
import { useRoute, useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

export function useBooks() {
  //Use by Fetch
  const books = ref<Book[]>([])
  const isLoading = ref(true)
  //Use by Add and Delete
  const toast = useToast()
  const file = ref<File | null>(null)
  //Use by Add and Edit
  const form = reactive({
    title: 'Queen of Tears',
    author: '',
    genre: '',
    description: '',
    status: '',
    review: '',
    image: '',
  })
  // Use by Edit and Delete
  const route = useRoute()
  const bookId = route.params.id
  const router = useRouter()

  interface Book {
    id: number
    image: string
    title: string
    author: string
    description: string
    genre: string
    status: string
    review: string
  }

  // Fetch Book
  const fetchBooks = async () => {
    isLoading.value = true
    try {
      const response = await axios.get('/api/books')
      books.value = response.data
    } catch (error) {
      console.error('Error fetching books', error)
    } finally {
      isLoading.value = false
    }
  }

  //Add Book
  const handleSubmit = async () => {
    const newBook = {
      title: form.title,
      author: form.author,
      genre: form.genre,
      description: form.description,
      status: form.status,
      review: form.review,
      image: form.image,
    }

    try {
      const response = await axios.post('/api/books', newBook)
      toast.success('Book Added Successfully')
      //@todo = show toast (notification)
      router.push(`/books/${response.data.id}`)
    } catch (error) {
      console.error('Error fetching books', error)
      //@todo = show toast (notification)
      toast.error('Book Was Not Added')
    }
  }

  const handleImageUpload = async (files: File | File[]) => {
    const selectedFile = Array.isArray(files) ? files[0] : files
    if (!selectedFile) return

    const reader = new FileReader()
    reader.onload = () => {
      form.image = reader.result as string // base64 string
    }
    reader.readAsDataURL(selectedFile)
  }

  //Edit Book
  const state = reactive({
    book: {} as Book,
    isLoading: true,
  })

  const handleEdit = async () => {
    const updatedBook = {
      title: form.title,
      author: form.author,
      genre: form.genre,
      description: form.description,
      status: form.status,
      review: form.review,
      image: form.image,
    }

    //use put to update the data based on ID
    try {
      const response = await axios.put(`/api/books/${bookId}`, updatedBook)
      toast.success('Book Updated Successfully')
      //@todo = show toast (notification)
      router.push(`/books/${response.data.id}`)
    } catch (error) {
      console.error('Error fetching books', error)
      //@todo = show toast (notification)
      toast.error('Book Was Not Updated')
    }
  }

  const handleImageEdit = async (files: File | File[]) => {
    const selectedFile = Array.isArray(files) ? files[0] : files
    if (!selectedFile) return

    file.value = selectedFile

    const reader = new FileReader()
    reader.onload = () => {
      form.image = reader.result as string // base64 string, same as image upload
    }
    reader.readAsDataURL(selectedFile)
  }

  const EditBook = async () => {
    try {
      const response = await axios.get(`/api/books/${bookId}`)
      state.book = response.data
      //Populate inputs
      form.title = state.book.title
      form.author = state.book.author
      form.genre = state.book.genre
      form.description = state.book.description
      form.status = state.book.status
      form.review = state.book.review
      form.image = state.book.image
    } catch (error) {
      console.error('Error fetching book', error)
    } finally {
      state.isLoading = false
    }
  }

  return {
    books,
    book: state.book,
    isLoading,
    fetchBooks,
    handleSubmit,
    handleImageUpload,
    form,
    handleEdit,
    EditBook,
    handleImageEdit,
  }
}
