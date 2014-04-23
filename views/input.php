<?php echo form_input($input_options) ?>

<?php if($this->uri->segment(1) !== 'admin'): ?>
	<script type="text/javascript" src="<?=base_url('streams_core/field_asset/js/soundcloud/soundcloud.js');?>"></script>
<?php endif;?>

<div class="preview_soundcloud_url" style="display: none;" data-no-soundcloud="<?php echo lang('streams.soundcloud.error') ?>">
    <div class="iframe-preview"></div>
    <?php echo form_hidden($input_hidden_options) ?>
</div>
