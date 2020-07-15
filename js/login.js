new Vue({
    el: '#app',
    data: {
        user:{
            email: '',
            password: '',
        },
    },
    methods: {
        signin() {
            console.log('signin');
            const api = 'https://course-ec-api.hexschool.io/api/auth/login';
            axios.post(api, this.user).then((response) => {
                console.log(response);
                const token = response.data.token;
                const expired = response.data.expired;
                document.cookie = `token=${token};expires=${new Date(expired * 1000)}; path=/`;
                window.location = '../products.html';
            }).catch((err)=>{
                console.log(err);
            });
        },
    },
})