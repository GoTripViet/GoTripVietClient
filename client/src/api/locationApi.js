import axiosClient from "./axiosClient";

const locationApi = {
  // Public (Guest) - Chỉ lấy Active
  getAll(params) {
    return axiosClient.get("/catalog/locations", { params });
  },

  // [MỚI] Management (Admin/Partner) - Lấy Active + Pending
  getManage(params) {
    return axiosClient.get("/catalog/locations/manage", { params });
  },

  getById(id) {
    return axiosClient.get(`/catalog/locations/${id}`);
  },

  requestNew(payload) {
    return axiosClient.post("/catalog/locations/request", payload);
  },

  create(payload) {
    return axiosClient.post("/catalog/locations", payload);
  },

  update(id, payload) {
    return axiosClient.put(`/catalog/locations/${id}`, payload);
  },

  remove(id) {
    return axiosClient.delete(`/catalog/locations/${id}`);
  },

  uploadLocationImage(formData) {
    return axiosClient.post("/uploads/location-image", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};

export default locationApi;
