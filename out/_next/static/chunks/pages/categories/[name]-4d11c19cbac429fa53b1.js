(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[318],
	{
		3170: function (e, i, a) {
			'use strict';
			a.d(i, {
				Tn: function () {
					return o;
				},
				qy: function () {
					return l;
				},
			});
			var s = a(5893),
				t = a(5675),
				r = a(1664),
				n = a(6161),
				c = a.n(n),
				o = function (e) {
					var i = e.article,
						a = e.size,
						n = e.imageHeight,
						o = e.imageWidth;
					return (0, s.jsx)('div', {
						className: 'col-md-'.concat(a, ' mb-4 col-12 ').concat(c().card),
						children: (0, s.jsx)(r.default, {
							href: '/articles/[id]/',
							as: 'articles/'.concat(i.id),
							children: (0, s.jsxs)('a', {
								children: [
									(0, s.jsx)(t.default, {
										src: i.image,
										alt: i.description,
										width: o,
										height: n,
									}),
									(0, s.jsx)('h5', {
										className: ' '.concat(c().title),
										children: i.category,
									}),
									(0, s.jsx)('span', {
										className: c().description,
										children: i.description,
									}),
									(0, s.jsx)('br', {}),
									(0, s.jsx)('span', {
										className: c().author,
										children: i.author,
									}),
								],
							}),
						}),
					});
				},
				l = function (e) {
					var i = e.article,
						a = e.index;
					return (0, s.jsx)('div', {
						className: c().topArticle,
						children: (0, s.jsx)(r.default, {
							href: '/articles/[id]',
							as: 'articles/'.concat(i.id),
							passHref: !0,
							children: (0, s.jsx)('a', {
								children: (0, s.jsxs)('div', {
									className: 'row',
									children: [
										(0, s.jsx)('div', {
											className: 'col-md-1',
											children: (0, s.jsx)('h1', { children: a + 1 }),
										}),
										(0, s.jsx)('div', {
											className: 'col-md-4',
											children: (0, s.jsx)(t.default, {
												src: i.image,
												alt: i.description,
												width: 150,
												height: 100,
											}),
										}),
										(0, s.jsxs)('div', {
											className: 'col-md-7',
											children: [
												(0, s.jsx)('h5', {
													className: ' '.concat(c().title),
													children: i.category,
												}),
												(0, s.jsx)('span', {
													className: c().description,
													children: i.description,
												}),
												(0, s.jsx)('br', {}),
												(0, s.jsx)('span', {
													className: c().author,
													children: i.author,
												}),
											],
										}),
									],
								}),
							}),
						}),
					});
				};
			i.ZP = function (e) {
				var i = e.articles;
				return (0, s.jsx)('div', {
					className: 'row d-flex justify-content-center',
					children: i.map(function (e) {
						return (0,
						s.jsx)(o, { article: e, size: 6, imageHeight: 250, imageWidth: 380 }, e.id);
					}),
				});
			};
		},
		2656: function (e, i, a) {
			'use strict';
			a.r(i),
				a.d(i, {
					default: function () {
						return g;
					},
				});
			var s = a(5893),
				t = a(7294),
				r = a(5675),
				n = {
					src: '/_next/static/image/public/assets/Plus_R\xe9cent.39531fd5f120a814d949c9b356426b06.png',
					height: 493,
					width: 1159,
					blurDataURL:
						'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAZUlEQVR4nAVASQqDMBR9XyRSsCGVlI6IuhXvfxa3btw4gzFO+ULf4uP21SEOJMhTlGYZurrF8JzY/4+gX/5yZE48wjeEuFGkNayxqJqSWR6gKFHO9wSGfoG6B8R2hww1NjGz2RZcsb4ldKrhVL0AAAAASUVORK5CYII=',
				},
				c = a(2902),
				o = a.n(c),
				l = function (e) {
					var i = e.titre,
						a = e.description;
					return (0, s.jsx)(s.Fragment, {
						children: (0, s.jsx)('div', {
							className: 'container  '.concat(o().mt_banner),
							children: (0, s.jsx)('div', {
								className: 'row justify-content-center',
								children: (0, s.jsxs)('div', {
									className: 'col-12 p-0 '.concat(o().position_relative),
									children: [
										(0, s.jsx)('div', { className: o().img_dark }),
										(0, s.jsx)(r.default, {
											src: n,
											alt: 'image a la une',
											width: 1400,
											className: 'w-100 p-0 m-0 '.concat(o().height),
										}),
										(0, s.jsxs)('div', {
											className: o().img_position_absolute,
											children: [
												(0, s.jsx)('h1', {
													className: 'border-start border-success px-3 '.concat(
														o().banner_title
													),
													children: i,
												}),
												(0, s.jsx)('p', {
													className: o().banner_description,
													children: a,
												}),
											],
										}),
									],
								}),
							}),
						}),
					});
				},
				d = a(3170),
				u = a(2849),
				m = a.n(u),
				_ = function (e) {
					var i = e.col1,
						a = e.col2,
						t = e.articles,
						r = e.articleCardSize;
					return (0, s.jsx)(s.Fragment, {
						children: a
							? (0, s.jsx)('div', {
									className: 'container',
									children: (0, s.jsxs)('div', {
										className: 'row',
										children: [
											(0, s.jsx)('div', {
												className: 'col-md-'.concat(i),
												children: (0, s.jsx)('div', {
													className: 'row',
													children: t.map(function (e) {
														return (0,
														s.jsx)(d.Tn, { article: e, size: r, imageHeight: 250, imageWidth: 380 }, e.id);
													}),
												}),
											}),
											(0, s.jsx)('div', {
												className: 'col-md-'.concat(a, ' mt-1'),
												children:
													12 == i
														? (0, s.jsx)('div', { className: m().squeleton_hr })
														: (0, s.jsx)('div', { className: m().squeleton }),
											}),
										],
									}),
							  })
							: (0, s.jsx)('div', {
									className: 'container',
									children: (0, s.jsx)('div', {
										className: 'row',
										children: (0, s.jsx)('div', {
											className: 'col-md-'.concat(i),
											children: (0, s.jsx)('div', {
												className: 'row justify-content-center mb-3',
												children: t.map(function (e) {
													return (0,
													s.jsx)(d.Tn, { article: e, size: r, imageHeight: 250, imageWidth: 380 }, e.id);
												}),
											}),
										}),
									}),
							  }),
					});
				},
				p = a(1163),
				g = function () {
					var e = (0, t.useState)([
							{
								id: '1',
								image: '/assets/bird.jpg',
								category: 'climat',
								description:
									'Corrupti explicabo voluptates soluta asperiores? Tenetur magni molestias exercitationem alias, dignissimos quos earum recusandae?',
								author: 'Emmanuella Mulanga',
							},
							{
								id: '2',
								image: '/assets/bird.jpg',
								category: 'biodiversite',
								description:
									'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor consequuntur perferendis tenetur vero laborum quia sequi ',
								author: 'Beni Map',
							},
							{
								id: '3',
								image: '/assets/bird.jpg',
								category: 'conservation',
								description:
									'Corrupti explicabo voluptates soluta asperiores? Tenetur magni molestias exercitationem alias, dignissimos quos earum recusandae?',
								author: 'Marcos Musafiri',
							},
							{
								id: '4',
								image: '/assets/bird.jpg',
								category: 'conservation',
								description:
									'Corrupti explicabo voluptates soluta asperiores? Tenetur magni molestias exercitationem alias, dignissimos quos earum recusandae?',
								author: 'Marcos Musafiri',
							},
							{
								id: '5',
								image: '/assets/bird.jpg',
								category: 'conservation',
								description:
									'Corrupti explicabo voluptates soluta asperiores? Tenetur magni molestias exercitationem alias, dignissimos quos earum recusandae?',
								author: 'Marcos Musafiri',
							},
							{
								id: '6',
								image: '/assets/bird.jpg',
								category: 'conservation',
								description:
									'Corrupti explicabo voluptates soluta asperiores? Tenetur magni molestias exercitationem alias, dignissimos quos earum recusandae?',
								author: 'Marcos Musafiri',
							},
							{
								id: '7',
								image: '/assets/bird.jpg',
								category: 'conservation',
								description:
									'Corrupti explicabo voluptates soluta asperiores? Tenetur magni molestias exercitationem alias, dignissimos quos earum recusandae?',
								author: 'Marcos Musafiri',
							},
							{
								id: '8',
								image: '/assets/bird.jpg',
								category: 'conservation',
								description:
									'Corrupti explicabo voluptates soluta asperiores? Tenetur magni molestias exercitationem alias, dignissimos quos earum recusandae?',
								author: 'Marcos Musafiri',
							},
						]),
						i = e[0],
						a =
							(e[1],
							i.filter(function (e) {
								return +e.id <= 6;
							})),
						r = i.filter(function (e) {
							return +e.id <= 4;
						}),
						n = (0, p.useRouter)().query.name;
					return (0, s.jsxs)('div', {
						children: [
							(0, s.jsx)(l, {
								titre: ''.concat(n),
								description:
									'F\xe9lix Lilakako, "Eruption volcanique de Nyiragongo, au-del\xe0 de la r\xe9action gouvernementale\u2026une planification d\u2019intervention urgente s\u2019impose"',
							}),
							(0, s.jsx)(_, {
								col1: 9,
								col2: 3,
								articleCardSize: 4,
								articles: a,
							}),
							(0, s.jsx)(_, {
								col1: 12,
								col2: 12,
								articleCardSize: 3,
								articles: r,
							}),
							(0, s.jsx)(_, { col1: 12, articleCardSize: 3, articles: i }),
						],
					});
				};
		},
		6479: function (e, i, a) {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/categories/[name]',
				function () {
					return a(2656);
				},
			]);
		},
		6161: function (e) {
			e.exports = {
				card: 'Article_card__2DgoW',
				title: 'Article_title__Siuk2',
				description: 'Article_description__3W2Fs',
				breaking_news__description: 'Article_breaking_news__description__1qYaU',
				author: 'Article_author__1T1e0',
				category: 'Article_category__1LIA5',
				sectionTitle: 'Article_sectionTitle__RmnnS',
				topArticle: 'Article_topArticle__35Vv7',
				articleContent: 'Article_articleContent__3vh9-',
				divider: 'Article_divider__1BR_6',
				footer: 'Article_footer__1ltnL',
				form: 'Article_form__LAjHV',
				comment: 'Article_comment__2MDmd',
				pub: 'Article_pub__d1Yna',
				newsLetter: 'Article_newsLetter__1kMPO',
				similar: 'Article_similar__1sFaN',
				author_: 'Article_author___2nfeU',
			};
		},
		2902: function (e) {
			e.exports = {
				mt_banner: 'Banner_mt_banner__2Agek',
				banner_title: 'Banner_banner_title__2IMyP',
				banner_description: 'Banner_banner_description__1MWyg',
				position_relative: 'Banner_position_relative__2mD2B',
				img_dark: 'Banner_img_dark__2ol11',
				img_position_absolute: 'Banner_img_position_absolute__2_x-i',
			};
		},
		2849: function (e) {
			e.exports = {
				squeleton: 'Publicite_squeleton__152sN',
				squeleton_hr: 'Publicite_squeleton_hr__H1EF8',
			};
		},
		1163: function (e, i, a) {
			e.exports = a(4651);
		},
	},
	function (e) {
		e.O(0, [774, 888, 179], function () {
			return (i = 6479), e((e.s = i));
			var i;
		});
		var i = e.O();
		_N_E = i;
	},
]);
