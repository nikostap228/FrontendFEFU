<template>
    <Transition name="modal">
        <div v-if="isOpen" class="modal">
            <div class="modal__overlay" @click="close"></div>
            <div class="modal__content">
                <button class="modal__close" @click="close">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 6L18 18" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <div class="modal__body">
                    <!-- Здесь позже будет форма -->
                    <h2 class="modal__title">Оставить заявку</h2>
                    <p class="modal__text">Форма будет здесь</p>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const open = () => {
    isOpen.value = true;
    document.body.style.overflow = 'hidden';
};

const close = () => {
    isOpen.value = false;
    document.body.style.overflow = '';
};

defineExpose({
    open,
    close
});
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal__content {
    position: relative;
    background-color: white;
    border-radius: 12px;
    padding: 40px;
    max-width: 500px;
    width: 100%;
    z-index: 1;
}

.modal__close {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
}

.modal__body {
    padding: 20px 0;
}

.modal__title {
    font-size: 24px;
    margin-bottom: 16px;
    color: #254741;
}

.modal__text {
    color: #666;
}

.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-active .modal__content,
.modal-leave-active .modal__content {
    transition: transform 0.3s ease;
}

.modal-enter-from .modal__content,
.modal-leave-to .modal__content {
    transform: translateY(-20px);
}
</style>