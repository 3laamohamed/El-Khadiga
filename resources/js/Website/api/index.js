import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export const getSeo = () => api.get('/seo');
export const getHome = () => api.get('/home');
export const getAbout = () => api.get('/about');
export const getCategories = () => api.get('/categories');
export const getProducts = (category = null) => api.get('/products', { params: category ? { category } : {} });
export const getProduct = (slug) => api.get(`/products/${slug}`);
export const getContactInfo = () => api.get('/contact-info');
export const submitContact = (data) => api.post('/contact', data);

export default api;
