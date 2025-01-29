import baseApi from './baseApi';

const categoryApi = baseApi.injectEndpoints({
        endpoints: (builder) => ({
                addCategory: builder.mutation({
                        query: (values) => ({
                                url: 'category/create-category',
                                method: 'POST',
                                body: values,
                        }),
                }),
                getAllCategories: builder.query({
                        query: () => ({
                                url: '/category',
                                method: 'GET',
                        }),
                        transformResponse: (response) => {
                                return {
                                        data: response.data,
                                        meta: response.pagination,
                                };
                        },
                }),
        }),
});

export const { useAddCategoryMutation, useGetAllCategoriesQuery } = categoryApi;
