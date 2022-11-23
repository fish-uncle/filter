<template>
	<div v-if="list.length" class="alarm-list">
		<div
			v-for="item in list"
			:key="item.id"
			class="alarm-item fn-flex"
			:class="item.alarm ? 'alarm' : ''"
			@click="handleAlarmItemClick(item)"
		>
			<img class="alarm-icon" :src="item[keyMap.listIcon] || defaultIcon" />
			<div class="right">
				<div class="top">
					<div class="name">{{ item[keyMap.name] }}</div>
					<div class="create-time">{{ item[keyMap.createTime] || '--' }}</div>
				</div>
				<div class="bottom">
					<div class="address">{{ item[keyMap.address] || '--' }}{{ item.addressDetail || '' }}</div>
					<div v-if="showStatus" class="status" :class="item[keyMap.status] === 1 ? 'handled' : 'unhandled'">
						{{ statusMap[item[keyMap.status]] }}
					</div>
				</div>
			</div>
		</div>
	</div>
	<j-empty v-else :margin-top="marginTop" />
</template>
<script lang="ts">
export default {
	name: 'JList1',
	props: {
		list: Array,
		keyMap: {
			type: Object,
			default: () => {
				return {
					listIcon: 'listIcon',
					createTime: 'time',
					address: 'areaName',
					name: 'eventName',
					status: 'alarmStatus',
					value: 'eventId',
				}
			},
		},
		showStatus: {
			type: Boolean,
			default: true,
		},
		// 空页面marginTop
		marginTop: {
			type: Number,
			default: 338,
		},
		defaultIcon: {},
	},
	emits: ['on-item-click'],
	// @ts-ignore
	setup(props, { emit }) {
		const handleAlarmItemClick = item => {
			emit('on-item-click', item)
		}
		const statusMap = ['未处理', '已处理', '超时未处理'].reduce((prev, item, index) => {
			prev[index] = item
			return prev
		}, {})
		return {
			handleAlarmItemClick,
			statusMap,
		}
	},
}
</script>
<style lang="scss" scoped>
.alarm-list {
	width: 585px;
	.alarm-item {
		border-radius: 4px;
		margin-bottom: 10px;
		background: rgba(0, 29, 92, 0.2);
		padding: 16px 17px 16px 16px;
		box-sizing: border-box;
		transition: all ease-in-out 0.3s;
		cursor: pointer;
		&:hover {
			background: rgba(59, 154, 255, 0.3);
		}
		&.alarm {
			&:hover {
				background: rgba(255, 89, 0, 0.2);
			}

			.name {
				color: #ff5900;
			}
		}
		.alarm-icon {
			width: 30px;
			height: 30px;
			object-fit: cover;
		}
		.right {
			flex: 1;
			margin-left: 14px;
			.top {
				display: flex;

				.name {
					flex: 1;
					font-weight: 500;
					font-size: 24px;
					line-height: 34px;
					color: white;
				}
				.create-time {
					font-weight: 400;
					font-size: 16px;
					line-height: 22px;
					color: #ffffff;
				}
			}
			.bottom {
				margin-top: 8px;
				display: flex;

				.status {
					margin-left: 12px;
					font-style: normal;
					font-weight: 400;
					font-size: 16px;
					line-height: 22px;
					text-align: right;
					color: #ff5900;
					&::before {
						content: '';
						display: inline-flex;
						width: 8px;
						height: 8px;
						border-radius: 50%;
						margin-right: 10px;
						background-color: #ff5900;
					}
					&.handled {
						color: #2bfdb1;
						&::before {
							background-color: #2bfdb1;
						}
					}
				}
				.address {
					flex: 1;
					font-weight: 400;
					font-size: 16px;
					line-height: 22px;
					color: rgba(255, 255, 255, 0.75);
				}
			}
		}
	}
}
</style>
