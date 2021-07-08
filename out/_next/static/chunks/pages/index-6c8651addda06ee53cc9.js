(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[405],
	{
		3170: function (e, i, s) {
			'use strict';
			s.d(i, {
				Tn: function () {
					return o;
				},
				qy: function () {
					return l;
				},
			});
			var r = s(5893),
				t = s(5675),
				a = s(1664),
				n = s(6161),
				c = s.n(n),
				o = function (e) {
					var i = e.article,
						s = e.size,
						n = e.imageHeight,
						o = e.imageWidth;
					return (0, r.jsx)('div', {
						className: 'col-md-'.concat(s, ' mb-4 col-12 ').concat(c().card),
						children: (0, r.jsx)(a.default, {
							href: '/articles/[id]/',
							as: 'articles/'.concat(i.id),
							children: (0, r.jsxs)('a', {
								children: [
									(0, r.jsx)(t.default, {
										src: i.image,
										alt: i.description,
										width: o,
										height: n,
									}),
									(0, r.jsx)('h5', {
										className: ' '.concat(c().title),
										children: i.category,
									}),
									(0, r.jsx)('span', {
										className: c().description,
										children: i.description,
									}),
									(0, r.jsx)('br', {}),
									(0, r.jsx)('span', {
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
						s = e.index;
					return (0, r.jsx)('div', {
						className: c().topArticle,
						children: (0, r.jsx)(a.default, {
							href: '/articles/[id]',
							as: 'articles/'.concat(i.id),
							passHref: !0,
							children: (0, r.jsx)('a', {
								children: (0, r.jsxs)('div', {
									className: 'row',
									children: [
										(0, r.jsx)('div', {
											className: 'col-md-1',
											children: (0, r.jsx)('h1', { children: s + 1 }),
										}),
										(0, r.jsx)('div', {
											className: 'col-md-4',
											children: (0, r.jsx)(t.default, {
												src: i.image,
												alt: i.description,
												width: 150,
												height: 100,
											}),
										}),
										(0, r.jsxs)('div', {
											className: 'col-md-7',
											children: [
												(0, r.jsx)('h5', {
													className: ' '.concat(c().title),
													children: i.category,
												}),
												(0, r.jsx)('span', {
													className: c().description,
													children: i.description,
												}),
												(0, r.jsx)('br', {}),
												(0, r.jsx)('span', {
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
				return (0, r.jsx)('div', {
					className: 'row d-flex justify-content-center',
					children: i.map(function (e) {
						return (0,
						r.jsx)(o, { article: e, size: 6, imageHeight: 250, imageWidth: 380 }, e.id);
					}),
				});
			};
		},
		8074: function (e, i, s) {
			'use strict';
			s.r(i),
				s.d(i, {
					default: function () {
						return x;
					},
				});
			var r = s(5893),
				t = s(7294),
				a = s(9008),
				n = s(5675),
				c = s(1664),
				o = s(2646),
				l = s.n(o),
				d =
					(s(6390),
					function (e) {
						var i = e.breakingNews;
						return (0, r.jsxs)('div', {
							children: [
								(0, r.jsx)('h5', {
									className:
										'border-start px-3 border-success border-5 '.concat(
											l().title
										),
									children: 'BREAKING NEWS',
								}),
								i.map(function (e) {
									return (0,
									r.jsx)('div', { children: (0, r.jsxs)('div', { className: l().breaking_news, children: [(0, r.jsx)('h6', { className: l().breaking_news__title, children: e.title }), (0, r.jsx)('p', { className: l().breaking_news__description, children: e.description })] }) }, e.id);
								}),
							],
						});
					}),
				u = s(3170),
				_ = function (e) {
					var i = e.opportunities;
					return (0, r.jsxs)('div', {
						className: l().opportunities,
						children: [
							(0, r.jsx)('h5', {
								className: 'border-start px-3 border-success border-5 '.concat(
									l().title
								),
								children: 'OPPORTUNITES',
							}),
							i.map(function (e) {
								return (0,
								r.jsx)('div', { className: l().opportunities_body, children: (0, r.jsx)('p', { children: e.description }) }, e.id);
							}),
						],
					});
				},
				h = s(6161),
				m = s.n(h),
				p = function (e) {
					var i = e.articles,
						s = e.title;
					return (0, r.jsxs)('div', {
						children: [
							(0, r.jsxs)('div', {
								className: m().sectionTitle,
								children: [
									(0, r.jsx)('h5', {
										className:
											'border-start px-3 border-success border-5 '.concat(
												l().title
											),
										children: s,
									}),
									(0, r.jsx)(c.default, {
										href: '/categories/[name]',
										as: '/categories/'.concat(s),
										passHref: !0,
										children: (0, r.jsx)('a', { children: 'Voir Plus' }),
									}),
								],
							}),
							(0, r.jsx)('div', {
								className: 'row d-flex justify-content-center '.concat(
									m().category
								),
								children: i.map(function (e) {
									return (0,
									r.jsx)(u.Tn, { article: e, size: 3, imageHeight: 220, imageWidth: 320 }, e.id);
								}),
							}),
						],
					});
				};
			function x() {
				var e = (0, t.useState)([
						{
							id: '334',
							title: 'Covid en Rdc',
							description: 'Corona virus is a virus, okay!',
						},
						{
							id: '45',
							title: 'Covid en Rdc',
							description: 'Corona virus is a virus, okay!',
						},
						{
							id: '88',
							title: 'Covid en Rdc',
							description: 'Corona virus is a virus, okay!',
						},
					]),
					i = e[0],
					s =
						(e[1],
						(0, t.useState)([
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
						])),
					o = s[0],
					h =
						(s[1],
						(0, t.useState)([
							{ id: '23', description: "Bourse d'Etude aux USA" },
							{ id: '24', description: "Bourse d'Etude aux USA" },
							{ id: '25', description: "Bourse d'Etude aux USA" },
							{ id: '26', description: "Bourse d'Etude aux USA" },
						])),
					m = h[0];
				h[1];
				return (0, r.jsxs)('div', {
					children: [
						(0, r.jsxs)(a.default, {
							children: [
								(0, r.jsx)('title', { children: 'Environews RDC' }),
								(0, r.jsx)('meta', {
									name: 'description',
									content: 'Generated by create next app',
								}),
								(0, r.jsx)('link', { rel: 'icon', href: '/favicon.ico' }),
							],
						}),
						(0, r.jsxs)('div', {
							className: 'container',
							children: [
								(0, r.jsxs)('div', {
									className: 'row '.concat(l().hero),
									children: [
										(0, r.jsxs)('div', {
											className: 'col-md-8 col-sm-12',
											children: [
												(0, r.jsx)('div', {
													className: l().topNews,
													children: (0, r.jsx)(c.default, {
														href: '/articles/[id]',
														as: '/articles/1',
														children: (0, r.jsxs)('a', {
															children: [
																(0, r.jsx)('h5', {
																	className:
																		'border-start px-3 border-success border-5 '.concat(
																			l().title
																		),
																	children: 'CORONAVIRUS',
																}),
																(0, r.jsx)(n.default, {
																	src: '/assets/bird.jpg',
																	alt: 'feature image',
																	height: 350,
																	width: 800,
																}),
																(0, r.jsx)('h4', {
																	children:
																		'Tshisekedi et les mesures draconiennes, et si la solution \xe0 la 3\xe8me vague \xe9tait congolaise ?',
																}),
																(0, r.jsx)('span', {
																	children: 'Christopher Buhendwa',
																}),
															],
														}),
													}),
												}),
												(0, r.jsx)(u.ZP, { articles: o }),
											],
										}),
										(0, r.jsxs)('div', {
											className: 'col-md-4 col-sm-12',
											children: [
												(0, r.jsx)(d, { breakingNews: i }),
												(0, r.jsx)('br', {}),
												(0, r.jsx)(_, { opportunities: m }),
												(0, r.jsx)('br', {}),
												(0, r.jsx)('div', { className: l().pub }),
											],
										}),
									],
								}),
								(0, r.jsx)(p, { articles: o, title: 'conservation' }),
								(0, r.jsx)(p, { articles: o, title: 'environement' }),
								(0, r.jsx)(p, { articles: o, title: 'biodiversite' }),
								(0, r.jsxs)('div', {
									className: 'row',
									children: [
										(0, r.jsx)('div', {
											className: 'col-md-7 col-sm-12',
											children: (0, r.jsx)('h5', {
												className: 'border-start px-3 border-success border-5',
												children: 'CHOIX DE L\u2019EDITEUR',
											}),
										}),
										(0, r.jsxs)('div', {
											className: 'col-md-5 col-sm-12',
											children: [
												(0, r.jsx)('h5', {
													className:
														'border-start px-3 border-success border-5',
													children: 'TOP ARTICLES',
												}),
												(0, r.jsx)('div', {
													children: o.map(function (e, i) {
														return (0,
														r.jsx)(u.qy, { article: e, index: i }, e.id);
													}),
												}),
											],
										}),
									],
								}),
							],
						}),
						(0, r.jsxs)('div', {
							className: l().newsLetter,
							children: [
								(0, r.jsx)('h3', { children: 'NEWSLETTER' }),
								(0, r.jsxs)('form', {
									children: [
										(0, r.jsx)('input', {
											className: 'form-control form-control-lg',
											type: 'email',
											placeholder: 'Email Address',
										}),
										(0, r.jsx)('p', {
											children:
												'Inscrivez-vous \xe0 notre newsletter pour vous tenir au courant de nos activit\xe9s.',
										}),
										(0, r.jsx)('button', {
											className: 'btn btn-success',
											children: "S'INSCRIRE",
										}),
									],
								}),
							],
						}),
					],
				});
			}
		},
		5301: function (e, i, s) {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/',
				function () {
					return s(8074);
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
		2646: function (e) {
			e.exports = {
				hero: 'Hero_hero__erqX8',
				title: 'Hero_title__3l9p3',
				topNews: 'Hero_topNews__BHQCA',
				breaking_news: 'Hero_breaking_news__fSgxn',
				breaking_news__title: 'Hero_breaking_news__title__vWIa9',
				opportunities: 'Hero_opportunities__3BpFX',
				opportunities_body: 'Hero_opportunities_body__3y0zl',
				pub: 'Hero_pub__L-mnT',
				newsLetter: 'Hero_newsLetter__1kG3n',
				partners: 'Hero_partners__2GbQN',
			};
		},
		9008: function (e, i, s) {
			e.exports = s(2775);
		},
	},
	function (e) {
		e.O(0, [774, 888, 179], function () {
			return (i = 5301), e((e.s = i));
			var i;
		});
		var i = e.O();
		_N_E = i;
	},
]);
