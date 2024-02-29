import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
        'Bearer ScLzVP0yx_g8xC6rsg9ZATIBgYdGNnQn1aKLBT5GQS_RqapMvfraFbhGTS7WuVjwCLiriXeWYwYQFx06S_LodQHL0WLvv8KdMbJeEZ27cx4z-AS8g0UPfVrx023gZXYx',
    },
});