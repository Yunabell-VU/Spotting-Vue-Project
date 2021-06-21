<template>
<div class="content">
    <div class="content__photos">
        <div class="content__photos__image"></div>
    </div>
    <div class="content__loc-and-pollut">
        <div class="content__loc-and-pollut__loc">
            <span class="content__loc-and-pollut__loc__title">Location</span>
            <span class="content__loc-and-pollut__loc__area">E3</span>
        </div>
        <div class="content__loc-and-pollut__pollut">
            <span class="content__loc-and-pollut__pollut__title">Trash Concentration</span>
            <span class="iconfont icontent__loc-and-pollut__pollut__level"
            v-for="(item, index) in 5"
            :key="index"
            >&#xe714;</span>
        </div>
    </div>
    <div class="content__desc">
        <div class="content__desc__title">Description</div>
        <div class="content__desc__text">Near souvenir shop</div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style lang="scss" scoped>
@import "../../../style/variables.scss";
@import "../../../style/mixins.scss";
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 2.5rem;
        border: 2px solid $content-themeColor;
        &__photos {
            margin-top: 2%;
            height:.8rem;
            width: 90%;
            // @include flexCenter;
            &__image {
                height: .8rem;
                width: .8rem;
                background-image: url('https://trello-attachments.s3.amazonaws.com/60ba1bb04709e232d53f03ce/60cdef7d4ca18b297455d3e0/df77c16433eafde9bbea6f6c2766bd31/%E6%B5%B7%E6%BB%A9%E5%9E%83%E5%9C%BE4.jpeg');
                background-size: cover;
            }
        }
        &__loc-and-pollut {
            display: flex;
            margin-top: 2%;
            height: .7rem;
            width: 90%;
            &__loc {
                height: 100%;
                width: 50%;
                &__title {
                    display: inline-block;
                    margin-top: 3%;
                    width: 100%;
                    font-size: .17rem;
                    font-weight: bold;
                    color: $content-themeColor;
                }
                &__area {
                    display: inline-block;
                    margin-top: 2%;
                    font-size: .2rem;
                    font-weight: bold;
                    color: $content-themeViceColor;
                }
            }
            &__pollut {
                height: 100%;
                width: 50%;
                &__title {
                    text-align: center;
                    display: inline-block;
                    margin-top: 1.5%;
                    width: 100%;
                    font-size: .16rem;
                    font-weight: bold;
                    color: $content-themeColor;
                }
                .iconfont {
                    font-size: .3rem;
                    color: #777;
                }
                .iconfont:nth-child(2), .iconfont:nth-child(3) {
                    color: $content-themeViceColor;
                }
            }
        }
        &__desc {
            height: .7rem;
            width: 90%;
            &__title {
                width: 100%;
                font-size: .16rem;
                font-weight: bold;
                color: $content-themeColor;
            }
            &__text {
                margin-top: 2%;
                font-size: .15rem;
                font-weight: bold;
                color: $content-themeViceColor;
            }
        }
    }
</style>
