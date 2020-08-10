const express = require('express');
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

// 프로필 페이지
router.get('/profile', isLoggedIn, (req, res) => {
    // 로그인 한 사람만 들어옴
    res.render('profile', { title: '내 정보 - NodeBird', user: null });
    console.log('hihihihihihih');
});

// 회원가입 페이지
router.get('/join', isNotLoggedIn, (req, res) => {
    // 로그인 안 한 사람만 들어옴
    res.render('join', {
        title: '회원가입 - NodeBird',
        user: req.user,
        joinError: req.flash('joinError'),
    });
});

// 메인 페이지
router.get('/', (req, res, next) => {
    res.render('main', {
        title: 'NodeBird',
        twits: [],
        user: req.user,
        loginError: req.flash('loginError'),
    });
});

module.exports = router;
