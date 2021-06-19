<template>
    <div class='photo-wrapper'>
        <span class='frame-text'>CHOOSE PHOTOS TO UPLOAD</span>
        <div class="photos">
            <div class="photos__image photos__sample"></div>
            <div class="photos__image photos__add">
                <span class="iconfont">&#xe632;</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PhotoFrame'
}
</script>

<style lang='scss' scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
    .photo-wrapper {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        margin-top: 3%;
        height: 1.5rem;
        width: 96%;
        border: 2px solid $content-themeColor;
    }
    .frame-text {
        display: inline-block;
        font-size: .16rem;
        font-weight: bold;
        color: $content-themeColor;
        padding: 1% 0 5% 2%;
    }
    .photos {
        display: flex;
        margin-left: 5%;
        width: 90%;
        height: 1rem;
        &__image {
            margin-right: 8%;
            height: .8rem;
            width: .8rem;
        }
        &__sample {
            background-image: url('https://trello-attachments.s3.amazonaws.com/60ba1bb04709e232d53f03ce/60cdef7d4ca18b297455d3e0/df77c16433eafde9bbea6f6c2766bd31/%E6%B5%B7%E6%BB%A9%E5%9E%83%E5%9C%BE4.jpeg');
            background-size: cover;
        }
        &__add {
            box-sizing: border-box;
            border: 1px dashed #777;
            transform: scale(.8, .8);
            @include flexCenter;
            .iconfont {
                font-size: .4rem;
                color: #d3d3d3;
            }
        }
    }
</style>
