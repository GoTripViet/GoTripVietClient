import axiosClient from "./axiosClient";

const categoryApi = {
  // Public
  getAll(params) {
    return axiosClient.get("/catalog/categories", { params });
  },

  // [MỚI] Management
  getManage(params) {
    return axiosClient.get("/catalog/categories/manage", { params });
  },

  getById(idOrSlug) {
    return axiosClient.get(`/catalog/categories/${idOrSlug}`);
  },

  requestNew(payload) {
    return axiosClient.post("/catalog/categories/request", payload);
  },

  create(payload) {
    return axiosClient.post("/catalog/categories", payload);
  },

  update(id, payload) {
    return axiosClient.put(`/catalog/categories/${id}`, payload);
  },

  remove(id) {
    return axiosClient.delete(`/catalog/categories/${id}`);
  },

  uploadCategoryImage(formData) {
    return axiosClient.post("/uploads/category-image", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};

export default categoryApi;
