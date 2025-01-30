import baseApi from './baseApi';

const contactApi = baseApi.injectEndpoints({
        endpoints: (builder) => ({
                getContact: builder.query({
                        query: () => ({
                                url: '/subscriber',
                                method: 'GET',
                        }),
                        providesTags: ['Contact'],
                        transformResponse: (response) => response.data,
                }),
                addContact: builder.mutation({
                        query: (values) => ({
                                url: '/subscriber',
                                method: 'POST',
                                body: values,
                        }),
                        invalidatesTags: ['Contact'],
                }),
        }),
});

export const { useGetContactQuery, useAddContactMutation } = contactApi;
