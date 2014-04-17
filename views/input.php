<?php echo form_input($input_options) ?>

<div class="preview_soundcloud_url" style="display: none;" data-no-soundcloud="<?php echo lang('streams.soundcloud.error') ?>">
    <div class="iframe-preview"></div>
    <?php echo form_hidden($input_hidden_options) ?>
</div>
