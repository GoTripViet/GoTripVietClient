import axiosClient from "./axiosClient";

const catalogApi = {
  // --- SẢN PHẨM (Public) ---
  getAll: (params) => axiosClient.get("/catalog/products", { params }),
  getById: (id) => axiosClient.get(`/catalog/products/${id}`),

  // [NEW] API Quản lý cho Admin (Xem hết status)
  getManageTours: (params) =>
    axiosClient.get("/catalog/products/admin/manage", { params }),
  // [NEW] API Duyệt/Từ chối Tour
  updateTourStatus: (id, status, reason) =>
    axiosClient.patch(`/catalog/products/${id}/status`, { status, reason }),

  getByIdAdmin: (idOrSlug) =>
    axiosClient.get(`/catalog/products/admin/${idOrSlug}`),

  create: (payload) => axiosClient.post("/catalog/products", payload),
  update: (id, payload) => axiosClient.put(`/catalog/products/${id}`, payload),
  remove: (id) => axiosClient.delete(`/catalog/products/${id}`),

  uploadTourImage(formData) {
    return axiosClient.post("/uploads/tour-image", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  getPartnerTours(params) {
    return axiosClient.get("/catalog/products/partner/me", { params });
  },

  addSchedule(productId, data) {
    return axiosClient.post(`/catalog/products/${productId}/schedules`, data);
  },

  removeSchedule(productId, scheduleId) {
    return axiosClient.delete(
      `/catalog/products/${productId}/schedules/${scheduleId}`,
    );
  },

  // --- ĐỊA ĐIỂM ---
  getAllLocations: (params) =>
    axiosClient.get("/catalog/locations", { params }),
  getManageLocations: (params) =>
    axiosClient.get("/catalog/locations/manage", { params }), // Đã thêm ở bước trước
  requestLocation: (payload) =>
    axiosClient.post("/catalog/locations/request", payload),
  createLocation: (payload) => axiosClient.post("/catalog/locations", payload),
  updateLocation: (id, payload) =>
    axiosClient.put(`/catalog/locations/${id}`, payload),
  deleteLocation: (id) => axiosClient.delete(`/catalog/locations/${id}`),
  uploadLocationImage(formData) {
    return axiosClient.post("/uploads/location-image", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  // --- DANH MỤC ---
  getAllCategories: (params) =>
    axiosClient.get("/catalog/categories", { params }),
  getManageCategories: (params) =>
    axiosClient.get("/catalog/categories/manage", { params }), // Đã thêm ở bước trước
  requestCategory: (payload) =>
    axiosClient.post("/catalog/categories/request", payload),
  createCategory: (payload) => axiosClient.post("/catalog/categories", payload),
  updateCategory: (id, payload) =>
    axiosClient.put(`/catalog/categories/${id}`, payload),
  deleteCategory: (id) => axiosClient.delete(`/catalog/categories/${id}`),
  uploadCategoryImage(formData) {
    return axiosClient.post("/uploads/category-image", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};

export default catalogApi;
