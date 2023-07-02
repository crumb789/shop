<template>
    <div class="order animate__animated animate__fadeIn ">
        <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="Your Name">
            </div>
            </div>

            <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
                <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
                </span>
            </div>
            <p class="help is-danger">This email is invalid</p>
            </div>

            <div class="field">
            <label class="label">Subject</label>
            <div class="control">
                <div class="select">
                <select>
                    <option>Select dropdown</option>
                    <option>With options</option>
                </select>
                </div>
            </div>
            </div>

            <div class="field">
            <label class="label">Comment on the order</label>
            <div class="control">
                <textarea class="textarea" placeholder="Your comment"></textarea>
            </div>
            </div>

            <div class="field">
            <div class="control">
                <label class="checkbox">
                <input type="checkbox">
                I agree to the <a href="#">terms and conditions</a>
                </label>
            </div>
            </div>

            <div class="field">
            <div class="control">
                <label class="radio">
                <input type="radio" name="question">
                Yes
                </label>
                <label class="radio">
                <input type="radio" name="question">
                No
                </label>
            </div>
            </div>

            <!-- <div class="field is-grouped">
            <div class="control">
                <button class="button is-link">Submit</button>
            </div>
            <div class="control">
                <button class="button is-link is-light">Cancel</button>
            </div>
            </div> -->
    </div>
</template>

<style lang="scss" scoped>
.order{
    width: 800px;
}

@media(max-width: 1023px){
    .order{
        width: auto;
    }
}
</style>